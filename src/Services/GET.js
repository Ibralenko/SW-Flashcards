class GET {
  static async getWords(){
    try{
      const resp = await fetch("http://itgirlschool.justmakeit.ru/api/words");
      return await resp.json()
    } catch (e) {
      console.error(error)
    }
  }
}
export default GET;