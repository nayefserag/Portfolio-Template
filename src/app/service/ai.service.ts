import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AiService {
  private apiUrl = 'https://your-ai-api-endpoint.com'; // Replace with actual API URL
  private apiKey = 'your-api-key'; // If needed

  constructor(private http: HttpClient) {}

  sendPrompt(prompt: string) {
    const headers = {
      'Authorization': `Bearer ${this.apiKey}`,
      'Content-Type': 'application/json'
    };

    const body = {
      prompt: prompt,
      // Other body params based on the API spec
    };

    return this.http.post(this.apiUrl, body, { headers });
  }
}
