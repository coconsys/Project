import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMeetingsData, IPostData } from './PostInterfaces';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private url: string = environment.localBackendUrl;;
  private usedIds: number[] = [];

  constructor(private http: HttpClient) {}

  public async getAllPosts() {
    const url = `${this.url}/posts`;
    this.usedIds = [];
    const allPosts = await this.http.get<IPostData[]>(url).toPromise();
    this.saveIds(allPosts);

    return allPosts;
  }

  public deletePostById(id: number) {
    const url = `${this.url}/posts/${id}`;

    return this.http.delete(url).toPromise();
  }

  public async addNewPost(formData: IPostData) {
    const url = `${this.url}/posts`;
    const newPost = await this.http.post(url, formData).toPromise();
    await this.getAllPosts();
    return newPost;
  }

  public async addNewMeeting(formData: IMeetingsData) {
    const url = `${this.url}/meetings`;
    return this.http.post(url, formData).toPromise();
  }

  public saveIds(data: IPostData[]) {
    data.forEach((element) => {
      this.usedIds.push(element.id);
    });
  }

  public generateUnusedId(): number {
    if (this.usedIds.length === 0) {
      return null as unknown as number;
    }
    let generatedNumber = 1;
    while (this.usedIds.includes(generatedNumber)) {
      generatedNumber++;
    }

    return generatedNumber;
  }
}
