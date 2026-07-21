declare module 'meshline' {
  export const MeshLineGeometry: any;
  export const MeshLineMaterial: any;
}

interface MeshLineIntrinsics {
  meshLineGeometry: any;
  meshLineMaterial: any;
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends MeshLineIntrinsics {}
  }
}

declare module 'react/jsx-runtime' {
  namespace JSX {
    interface IntrinsicElements extends MeshLineIntrinsics {}
  }
}

declare module 'react/jsx-dev-runtime' {
  namespace JSX {
    interface IntrinsicElements extends MeshLineIntrinsics {}
  }
}

export {};
