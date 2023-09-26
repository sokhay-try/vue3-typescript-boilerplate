import BaseHttpService from "./base-http.service";
interface ITest {
  text: string;
  source: string;
}
class TestService extends BaseHttpService {
  endpoint = `facts`;

  async getUsers(): Promise<ITest[]> {
    const { data } = await this.get(this.endpoint);
    return data;
  }
}
export default new TestService();
