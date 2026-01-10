const createObservable = () => {
    const observersMap = new Map();
    const subscribe = (key, observer) => {
        const observers = observersMap.get(key) || [];
        observers.push(observer);
        observersMap.set(key, observers)
    }
    const unsubscribe = (key, observer) => {
        const observers = observersMap.get(key) || [];
        observers = observers.filter(o => o !== observer);
        observersMap.set(key, observers)
    }
    const notify = (key, data) => {
        const observers = observersMap.get(key) || [];
        observers.forEach(o => o(data));
    }
    return {
        subscribe,
        unsubscribe,
        notify
    }
}

const call = (person) => {
    console.log(`☎️ Call ${person}`);
}
const sendEmail = (person) => {
    console.log(`✉️ Send email to ${person}. Subject: Conference reminder`);
}

// Observable that manages conference events
const conferenceEvents = createObservable();

conferenceEvents.subscribe("invite", call);
conferenceEvents.subscribe("invite", sendEmail);
conferenceEvents.notify("invite", "Alice");

const recordAccept = (person) => {
    console.log(`✅ ${person} has accepted invitation`)
}
const prepareGift = (person) => {
    console.log(`🎁 A gift has been prepared for ${person}`)
}

conferenceEvents.subscribe("accept", recordAccept);
conferenceEvents.subscribe("accept", prepareGift);
conferenceEvents.notify("accept", "Alice");

