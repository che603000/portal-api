/**
 * Created by alex on 17.08.2016.
 */

let cash = null;

export default app => {
    const {events, content} = app;

    //this.content.render(this.modules[0].content);

    const data = {

        menu :{
            id: 'page1',
            label: 'page1',
            href: '/#page1',
            items:[
                {
                    id:'page1-1',
                    label: 'page1-1',
                    href: '/#page1-1',
                }
            ]
        },
        content(){
            return new Promise(ok=> {
                setTimeout(()=> {
                    console.log("timer");
                    ok('<h3>В первую очередь - мобильные</h3>  ')
                }, 3000)
            })
        }


    }

    events.on(`${data.menu.id}:click`, e=>{
        content.render(data.content);
        //console.log(e);
    })

    return data;
}