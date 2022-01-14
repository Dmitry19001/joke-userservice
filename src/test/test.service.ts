import { Injectable } from '@nestjs/common';

@Injectable()
export class TestService {

    async handleTestMessageRequest(data: any): Promise<string> {
        console.log("handleTestMessageRequest user called: " + JSON.stringify(data));
        return `handleTestMessageRequest user echoing ${data.text}`;
    }
}
