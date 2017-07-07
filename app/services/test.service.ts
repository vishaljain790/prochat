import { Injectable } from "@angular/core";
import { Http,Response } from "@angular/http";
import { Headers, RequestOptions } from '@angular/http';


import { Observable } from 'rxjs/Observable';

// Observable class extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { Userinfo } from '../models/userinfo';

@Injectable()
export class TestService{

    shalladdsignupandlogin : boolean = true;
    currentusername        : string;
    datacoming             : string; 
    conversation_update    = [];
    statusforcurrentupadte : boolean;
    isdatacoming           : boolean;

    constructor(private http: Http){

        console.log("service initialized.....");
    }

   /** singup api */
   
    signUpUser(data:any): Observable<any> {

        let body    = JSON.stringify(data);

	    let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('http://localhost:3100/signup/user', body, options)
                   .map(this.extractData)
                   .catch(this.handleErrorObservable);
    }
    
    private extractData(res: Response) {
	    let body = res.json();
        console.log("body data:-"+body["status"]);
        return body  || {};
    }

    private handleErrorObservable (error: Response | any) {
    	console.error(error.message || error);
    	return Observable.throw(error.message || error);
    }


    /**
     * sign up api
     */

    


 /** get userdetials api */
   
    getUserDetails(): Observable<any> {

        //let body    = JSON.stringify(data);

	    let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.get('http://localhost:3100/user/getuserdetails', options)
                   .map(this.getData)
                   .catch(this.handleerror);
    }
    
    private getData(res: Response) {
	    let body = res.json();
        console.log("body data:-"+body["status"]);
        return body || {};
    }

    private handleerror (error: Response | any) {
    	console.error(error.message || error);
    	return Observable.throw(error.message || error);
    }


    /**
     * get user details api
     */

    


/***login api */

 loginUser(data:any): Observable<any> {

        let body    = JSON.stringify(data);

	    let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('http://localhost:3100/login/user', body, options)
                   .map(this.extractDataforlogin)
                   .catch(this.handleErrorObservableforlogin);
    }
    
    private extractDataforlogin(res: Response) {
	    let body = res.json();
        console.log("body data:-"+body["status"]);
        return body  || {};
    }

    private handleErrorObservableforlogin (error: Response | any) {
    	console.error(error.message || error);
    	return Observable.throw(error.message || error);
    }

/***login api */





/***getmessages */

 getMessages(data:any): Observable<any> {

        let body    = JSON.stringify(data);

	    let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('http://localhost:3100/login/user', body, options)
                   .map(this.extractDataformsg)
                   .catch(this.handleErrorObservableforgetmsg);
    }
    
    private extractDataformsg(res: Response) {
	    let body = res.json();
        console.log("body data:-"+body["status"]);
        return body  || {};
    }

    private handleErrorObservableforgetmsg (error: Response | any) {
    	console.error(error.message || error);
    	return Observable.throw(error.message || error);
    }

/***get messages */




/***Get whole chatting yet!!! */
getWholeChat(data:any): Observable<any> {

        let body    = JSON.stringify(data);

	    let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('http://localhost:3100/users/getchatlist', body, options)
                   .map(this.extractDataforgetchat)
                   .catch(this.handleErrorObservableforgetchat);
    }
    
    private extractDataforgetchat(res: Response) {
	    let body = res.json();
        console.log("body data:-"+body["status"]);
        return body  || {};
    }

    private handleErrorObservableforgetchat (error: Response | any) {
    	console.error(error.message || error);
    	return Observable.throw(error.message || error);
    }

/***Get whole chatting yet!!! */





}