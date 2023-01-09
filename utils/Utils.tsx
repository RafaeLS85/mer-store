export function getElementHeight (element: string): number | undefined {
    if(!document) return 
    return document.getElementById(element)!.clientHeight;
  }
  