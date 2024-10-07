class Arr {
    value: string[] = [];
    length: number = 0;
  
  
    push(el :string): number {
      const array = new Array(this.value.length + 1);
  
      for (let i = 0; i < this.value.length; i++) {
        array[i] = this.value[i]
      }
      array[this.value.length] = el;
      this.value = array;
      return this.value.length;
    }

    filter(filterFunc: Function) {
        const filteredArray = new Array();

        this.value.map((element: string) => {
            console.log(element);
            if (filterFunc(element)){
                filteredArray.push(element);
            }
        })
        
        return filteredArray;
    }
  }
  
  export default Arr;