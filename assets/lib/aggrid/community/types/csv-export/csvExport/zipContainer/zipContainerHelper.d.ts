import type { ZipFile } from './zipContainer';
interface ZipFileHeader {
    localFileHeader: Uint8Array;
    centralDirectoryHeader: Uint8Array;
}
export interface ProcessedZipFile extends ZipFileHeader {
    content: Uint8Array;
    isCompressed: boolean;
}
export declare const getDeflatedHeaderAndContent: (currentFile: ZipFile, offset: number) => Promise<ProcessedZipFile>;
export declare const getHeaderAndContent: (currentFile: ZipFile, offset: number) => ProcessedZipFile;
export declare const buildCentralDirectoryEnd: (tLen: number, cLen: number, lLen: number) => Uint8Array;
export {};
