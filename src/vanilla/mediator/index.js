// MEDIATOR PATTERN: Conference Coordinator (Simplified)
// The coordinator acts as a central mediator between conference parties
// Parties communicate through the coordinator, not directly with each other

// The mediator object needs define these following methods
// const mediator = {
//     objects: objects that need to communicate together, 
//     register: add object to objects list
//     sendRequest(from, to, data): method to communicate between objects and data need to transfer
// }

// The object need 2 types of method
// const object = {
//      ownMethods: need call mediator.sendRequest,
//      handleRequest: to handle when mediator.sendRequest is call
// }

const createMediator = () => {
    const objects = new Map();

    const register = (name, obj) => {
        objects.set(name, obj);
    }
    const sendRequest = (from, to, data) => {
        // const sender = objects.get(from);
        const receiver = objects.get(to);
        receiver.handleRequest(from, data)
    }
    return {
        register,
        sendRequest
    }
}

const createSpeaker = (mediator) => {
      
    const requestMic = () => {
        mediator.sendRequest("speaker", "service", { type: "Microphone", content: "AX-270"})
    }

    const handleRequest = (from, data) => {
          console.log(`From ${from}. Request for ${data.type}. Content ${data.content} `)
    }
    return {
        requestMic,
        handleRequest
    }
}

const createService = (mediator) => {
      
    const respondMic = () => {
        mediator.sendRequest("service", "speaker", { type: "Microphone", content: "Has provide speaker AX-270 mic"})
    }

    const handleRequest = (from, data) => {
          console.log(`From ${from}. Request for ${data.type}. Content ${data.content} `)
    }
    return {
        respondMic,
        handleRequest
    }
}
const mediator = createMediator();
const speaker = createSpeaker(mediator);
const service = createService(mediator);

mediator.register("speaker", speaker);
mediator.register("service", service);

speaker.requestMic();
service.respondMic();



