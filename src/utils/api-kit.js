import axios from "axios";

const APIKit = axios.create({
    timeout: 10000,
    url: '',
    headers: {
        'Content-Type': 'application/json', 
    }
})
APIKit.interceptors.request.use(request => {
    console.log('>>>>> request: ', request);
    return request;
});

export { APIKit };