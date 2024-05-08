// const element=document.querySelectorAll("[data-tab-target]")
// const tabcontent=document.querySelectorAll("[data-tab-content")
// console.log(element,'querySelector')

// element.forEach((tab)=>{
//     tab.addEventListener("click",(event)=>{
//         const target=document.querySelector(tab.dataset.tabTarget)
//         tabcontent.forEach((newtab)=>newtab.classList.remove("active"))
//         target.classList.add("active")
//     })
// })


// const newEvent=new CustomEvent("Start",{
//     detail:{name:"Jyothi"}
// })
// // console.log(newEvent,'newEvent',window)
// document.addEventListener("Start",(e)=>{
//     console.log("Dispatch event",e.currentTarget,e.detail)
// })


// document.dispatchEvent(newEvent)

// const newEvent=require("events");

// const event=new newEvent()

// console.log(event)

// event.addListener("firstevent",(e)=>{
//     console.log(e)
// })

// event.emit("firstevent","This is my first event")

class Emitter{
    constructor(){
        this.events={}
        console.log(this.events)
    }

    on(eventName,listener){
        if(!this.events[eventName]){
            this.events[eventName]=[]
        }
        this.events[eventName].push(listener)
    }

    emit(eventName,...args){
        const eventListener=this.events[eventName];
        if(eventListener){
            eventListener.forEach(element => {
                element(...args)
            });
        }
    }

    off(eventName,eventToRemove){
        const eventListener=this.events[eventName]
        if(eventListener){
            this.events[eventListener]=eventListener.filter((eventlistner)=>eventlistner!==eventToRemove)
        }
    }
}


const newEvent=new Emitter()


newEvent.on("message",(message)=>{
    console.log(`new message ${message}`)
})

newEvent.emit("message","Hello This is Jyothi Prakash")

newEvent.on("socket",(message)=>{
    console.log(`new message ${message}`)
})

newEvent.emit("socket","This is for communication")



// const newEvents=require("events")

// const Event=new newEvents();

// Event.addListener("item",(me)=>{
//     console.log(me)
// })

// Event.emit("item",'new')

const eventt=new Event("item");

document.addEventListener("item",(message)=>{
    console.log(message)
})

document.dispatchEvent(eventt)