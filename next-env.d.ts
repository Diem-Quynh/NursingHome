/// <reference types="next" />
/// <reference types="next/types/global" />
declare module 'enquire-js' {
    function enquireScreen(params?: any): any
    function unenquireScreen(params?: any): any
}
interface Context {
    readonly pathname: string;
    readonly query: string;
    readonly asPath: string;
    readonly req: http.IncomingMessage;
    readonly res: http.ServerResponse;
    readonly jsonPageRes: Response;
    readonly err: any;
}

interface GridTable{
    getOptions: Function
    reload: Function
}  

interface FilterParam{
    column: any,
    confirm: Function,
    ref: any
}