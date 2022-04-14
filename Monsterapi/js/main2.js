//Get a dog photo from the dog.ceo api and place the photo in the DOM
// document.querySelector('button').addEventListener('click', getFetch)

// function getFetch(){
//   const choice = document.querySelector('input').value
//   const url = 'https://pokeapi.co/api/v2/pokemon/'+choice



//click event 
document.querySelector('button').addEventListener('click', getFetch)

//searches API for info entered into search
function getFetch(){
  let inputVal = document.querySelector('input').value
  const url = `https://mhw-db.com/monsters?q={"name":"${inputVal}"}`



  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(monsters => {
          console.log(monsters[0])
        // document.querySelector('img').src = data.message
        const item = new MonsterInfo(monsters)
        item.showName()//runs method using dot.notaion
        item.listElements()//runs method using dot.notation
        item.showDescription()//runs method using dot.notation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
    }
   //creating the monster object
    class MonsterInfo{
      constructor(monsters){
        this.name = monsters[0].name
        this.element = monsters[0].weaknesses
        this.description = monsters[0].description
      }
      //method takes name and displays on DOM
      showName(){
        document.getElementById('monster-name').innerHTML = this.name
      }
      //method takes monster description and displays on DOM
      showDescription(){
        document.getElementById('monster-desc').innerText = this.description
      }
      //list of elemental weaknesses
      listElements(){
        let tableRef = document.getElementById('element-table')
        //for loop allows table to clear for new search
        for(let i = 1; i < tableRef.rows.length;){
          tableRef.deleteRow(i);
        }
        for(let key in this.element){
          let newRow = tableRef.insertRow(-1)
          let newICell = newRow.insertCell(0)
          let newVCell = newRow.insertCell(1)
          let newIText = document.createTextNode(this.element[key].element)
          let weakStatus = this.element[key].stars == null ? 'IDK' : this.element[key].stars
          let newVtext = document.createTextNode(weakStatus)
          newICell.appendChild(newIText)
          newVCell.appendChild(newVtext)

        }
            }
    }