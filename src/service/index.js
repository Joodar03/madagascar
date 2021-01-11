import {create} from "axios"

class Service {
    http = create({
        baseURL: "",
        headers: {
            "Content-type": "application/json"
        }
    })
}

const service = new Service()

export default service