/**
 * Created by alex on 17.08.2016.
 */

export default class {

    constructor($container) {
        this.$container = $container;
    }

    render(content) {
        this.clear();
        this._cnt = content();

        if (this._cnt instanceof Promise)
            this._cnt.then(res=> {
                this.$container.empty().append(res);
            })
        else
            this.$container.empty().append(this._cnt);

    }

    clear(){
        this.$container.empty();
        if(this._cnt && this._cnt instanceof Promise){
            console.log(this._cnt);
        }
    }

}