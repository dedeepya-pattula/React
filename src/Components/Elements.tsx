export const nodes = [
    {
      id: "1",
      type: "input",
      data: {
        label: "Home",
      },
      position: { x: 300, y: 0 },
    },
    {
      id: "2",
      data: {
        label: "Sign up",
      },
      position: { x: 100, y: 100 },
    },
    {
      id: "3",
      data: {
        label: "log in",
      },
      position: { x: 300, y: 100 },
      
    },
    {
      id: "4",
      data: {
        label: "password",
      },
      position: { x: 100, y: 200 },
      
    },
    {
      id: "5",
      data: {
        label: "username",
      },
      position: { x: 300, y: 200 },
    },
    {
      id: "6",
      data: {
        label: "user",
      },
      position: { x: 500, y: 100 },
    },
  ];
  
  export const edges = [
    { id: "e1-2", source: "1", target: "2", type: "smoothstep", animated: true },
    { id: "e1-3", source: "1", target: "3", type: "smoothstep", animated: true },
    { id: "e1-4", source: "2", target: "4", type: "smoothstep", animated: true },
    { id: "e1-5", source: "3", target: "5", type: "smoothstep", animated: true },
    { id: "e1-6", source: "1", target: "6", type: "smoothstep", animated: true },
  ];
  