import { ln4Manager } from './ln4.Manager';
import { Input, Output } from '@angular/core';
import { ln4Map } from './ln4.Map';

export class ln4BaseComponent {
    /**
     * this is the standard id of the tag
     */
    @Input('id') public tagId: string = null;
    /**
     * this is the standard input
     */
    @Input('ctrl') public scopeCtl: ln4Map = new ln4Map();

    /**
     * this is the standard output
     * scope.remote is the data collected from system
     */
    @Output('out') public scope: any = {};

    /**
     * input parametres
     * as the calling on the config
     */
    @Input('in') public scopeIn: ln4Map = new ln4Map();

    /**
     *  In on ln4 mode
     */
    public myId: string;
    /**
     *  Ln4Manager
     */
    private ln4Mng: ln4Manager;
    //////////////////////////////////////////////////////////////////
    // Translate
    //////////////////////////////////////////////////////////////////
    public Translate(name: string): string {
        return this.ln4Mng.translate(name);
    }
    //////////////////////////////////////////////////////////////////
    // Mng data I/O
    //////////////////////////////////////////////////////////////////
    public setData(name: string, value: any): void {
        return this.ln4Mng.dataImport(name, value);
    }
    public getData(name: string): any {
        return this.ln4Mng.dataExport(name);
    }
    public delData(name: string): any {
        return this.ln4Mng.dataClean(name);
    }
    public getProfile(name) {
        return this.ln4Mng.profileGet(name);
    }
    public getCfg(name) {
        return this.ln4Mng.cfgGet(name);
    }
    //////////////////////////////////////////////////////////////////
    // constructor
    //////////////////////////////////////////////////////////////////
    constructor() {
        this.ln4Mng = ln4Manager.GetInstance();
    }
}
