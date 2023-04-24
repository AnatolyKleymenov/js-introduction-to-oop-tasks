// BEGIN
export default make = (numer, denom) => {
    return {
      numer,
      denom,
  
      setNumer(numer) {
        this.numer = numer;
      },
  
      setDenom(denom) {
        this.denom = denom;
      },
  
      getNumer() {
        return this.numer;
      },
  
      getDenom() {
        return this.denom;
      },
  
      toString() {
        return `${this.numer}/${this.denom}`;
      },
  
      add(rational) {
        const newNumer = this.numer * rational.getDenom() + this.denom * rational.getNumer();
        const newDenom = this.denom * rational.getDenom();
        return make(newNumer, newDenom);
      }
    };
  }
// END