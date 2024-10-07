import Arr from "../arr";

describe("Array", () => {
  it("should create an array", () => {
    const newArray = new Arr();

    expect(newArray.value).toHaveLength(0);
  });

  it('should had an element in the array', () => {
    const newArray = new Arr();
    const result = newArray.push("a");

    expect(newArray.value).toHaveLength(1);
    expect(result).toEqual(expect.any(Number));
  })

  it('should filter with a given function', () => {
    const newArr = new Arr();
    const realArray = new Array();

    newArr.push("a"); 
    newArr.push("a"); 
    newArr.push("b"); 
    
    realArray.push("a", "a", "b");

    const filteredArray = realArray.filter(el => el !== "b");
    const filteredArr = newArr.filter((el:string) => el !== "b");

    expect(filteredArray).toEqual(['a', 'a']);
    expect(filteredArr).toEqual(['a', 'a']);
    
  })
});