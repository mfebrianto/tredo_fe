import Rx from 'rxjs/Rx';
import store from '../../store.js';
import querystring from 'querystring';

export function submitUser(url){



  return Rx.Observable.create(observer => {
    const req = new XMLHttpRequest();
    const params = querystring.stringify(store.getState().user)+"&confirm_success_url=https://localhost:3000";

    console.log(params);

    req.open("POST", url, true);

    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    req.onload = () => {
      if (req.status === 200) {
        observer.next(req.response);
        observer.complete();
      } else {
        observer.error(new Error(req.statusText));
      }
    };

    req.onerror = () => {
      observer.error(new Error('An error occured'));
    };

    req.send(params);
  });




}
