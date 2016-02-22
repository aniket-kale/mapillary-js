/// <reference path="../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../node_modules/rx/ts/rx.all.d.ts" />
/// <reference path="../../typings/threejs/three.d.ts" />

import * as rx from "rx";
import * as THREE from "three";

import {
    GLRenderer,
    GLRenderStage,
    IGLRender,
    IGLRenderFunction,
    IGLRenderHash,
} from "../../src/Render";
import {Camera, Transform} from "../../src/Geo";
import {IFrame, ICurrentState} from "../../src/State";

class RendererMock implements THREE.Renderer {
    public domElement: HTMLCanvasElement = document.createElement("canvas");

    public render(s: THREE.Scene, c: THREE.Camera): void { }
    public setSize(w: number, h: number, updateStyle?: boolean): void { }
    public setClearColor(c: THREE.Color, o: number): void { }
    public clear(): void { }
    public clearDepth(): void { }
}

describe("GLRenderer.ctor", () => {
    it("should be contructed", () => {
        let element: HTMLDivElement = document.createElement("div");
        let glRenderer: GLRenderer = new GLRenderer(element, rx.Observable.empty<IFrame>());

        expect(glRenderer).not.toBeNull();
    });

    it("should not instantiate a WebGL context", () => {
        spyOn(THREE, "WebGLRenderer");

        let element: HTMLDivElement = document.createElement("div");
        let glRenderer: GLRenderer = new GLRenderer(element, rx.Observable.empty<IFrame>());

        expect(THREE.WebGLRenderer).not.toHaveBeenCalled();
    });
});

describe("GLRenderer.renderer", () => {
    let createGLRenderer = (frame$?: rx.Observable<IFrame>): GLRenderer => {
        let element: HTMLDivElement = document.createElement("div");
        let glRenderer: GLRenderer = new GLRenderer(element, !!frame$ ? frame$ : rx.Observable.empty<IFrame>());

        return glRenderer;
    };

    let createGLRenderHash = (frameId: number, needsRender: boolean): IGLRenderHash => {
        let renderFunction: IGLRenderFunction =
            (pc: THREE.PerspectiveCamera, r: THREE.WebGLRenderer): void => {
                r.render(new THREE.Scene(), pc);
            };

        let render: IGLRender = {
            frameId: frameId,
            needsRender: needsRender,
            render: renderFunction,
            stage: GLRenderStage.Background,
        };

        let renderHash: IGLRenderHash = {
            name: "mock",
            render: render,
        };

        return renderHash;
    };

    let createFrame = (frameId: number): IFrame => {
        let state: ICurrentState = {
            alpha: 0,
            camera: new Camera(),
            currentNode: null,
            previousNode: null,
            trajectory: [],
            currentIndex: 0,
            lastNode: null,
            nodesAhead: 0,
            currentTransform: null,
            previousTransform: null,
        }

        return { id: frameId, state: state };
    }

    it("should be created on first render", () => {
        let rendererMock: RendererMock = new RendererMock();
        spyOn(THREE, "WebGLRenderer").and.returnValue(rendererMock);

        let glRenderer: GLRenderer = createGLRenderer();
        let renderHash: IGLRenderHash = createGLRenderHash(0, true);

        glRenderer.render$.onNext(renderHash);

        expect(THREE.WebGLRenderer).toHaveBeenCalled();
    });

    it("should render", () => {
        let rendererMock: RendererMock = new RendererMock();
        spyOn(rendererMock, "render");
        spyOn(THREE, "WebGLRenderer").and.returnValue(rendererMock);

        let glRenderer: GLRenderer = createGLRenderer();
        let renderHash: IGLRenderHash = createGLRenderHash(0, true);

        glRenderer.render$.onNext(renderHash);

        expect((<jasmine.Spy>rendererMock.render).calls.count()).toBe(1);
    });

    it("should only render once for the same frame id", () => {
        let rendererMock: RendererMock = new RendererMock();
        spyOn(rendererMock, "render");
        spyOn(THREE, "WebGLRenderer").and.returnValue(rendererMock);

        let glRenderer: GLRenderer = createGLRenderer();
        let renderHash: IGLRenderHash = createGLRenderHash(0, true);

        glRenderer.render$.onNext(renderHash);
        glRenderer.render$.onNext(renderHash);

        expect((<jasmine.Spy>rendererMock.render).calls.count()).toBe(1);
    });

    it("should render twice for two frame ids", () => {
        let rendererMock: RendererMock = new RendererMock();
        spyOn(rendererMock, "render");
        spyOn(THREE, "WebGLRenderer").and.returnValue(rendererMock);

        let frame$: rx.BehaviorSubject<IFrame> = new rx.BehaviorSubject<IFrame>(createFrame(1));
        let glRenderer: GLRenderer = createGLRenderer(frame$);

        let frameSubscription: rx.IDisposable = frame$
            .map<IGLRenderHash>(
                (frame: IFrame): IGLRenderHash => {
                    let renderHash: IGLRenderHash = createGLRenderHash(frame.id, true);

                    return renderHash;
                })
            .subscribe(glRenderer.render$);

        expect((<jasmine.Spy>rendererMock.render).calls.count()).toBe(1);

        frame$.onNext(createFrame(2));
        expect((<jasmine.Spy>rendererMock.render).calls.count()).toBe(2);
    });

    it("should clear when hash is cleared", () => {
        let rendererMock: RendererMock = new RendererMock();
        spyOn(rendererMock, "clear");
        spyOn(THREE, "WebGLRenderer").and.returnValue(rendererMock);

        let frame$: rx.BehaviorSubject<IFrame> = new rx.BehaviorSubject<IFrame>(createFrame(1));
        let glRenderer: GLRenderer = createGLRenderer(frame$);

        let frameSubscription: rx.IDisposable = frame$
            .map<IGLRenderHash>(
                (frame: IFrame): IGLRenderHash => {
                    let renderHash: IGLRenderHash = createGLRenderHash(frame.id, true);

                    return renderHash;
                })
            .subscribe(glRenderer.render$);

        expect((<jasmine.Spy>rendererMock.clear).calls.count()).toBe(1);

        frameSubscription.dispose();

        frame$.onNext(createFrame(2));

        glRenderer.clear("mock");
        expect((<jasmine.Spy>rendererMock.clear).calls.count()).toBe(2);
    });
});