import EventEmiiter from "events"

const customEmmiter = new EventEmiiter()

customEmmiter.on("response", (name , id)=>{
    console.log(`user: ${name} id ${id}`)
})

customEmmiter.emit("response" , "robo" , 19)