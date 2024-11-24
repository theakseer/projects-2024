const url="https://api.dictionaryapi.dev/api/v2/entries/en/"
const result= document.getElementById("result");
const sound= document.etElementById("sound");
const btn= document.getElementById("search-btn");
alert("1")
const search = async (e)=>{
    let inpWord =document.getElementById("inp-word").value;
    e.preventDefault()
    alert(inpWord)
    await  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inpWord}`).then((response)=>response.json)
    .then((data) =>{
        console.log(data);
        result.innerHTML=` 
        <div class="Word">
                <h3> ${data}></h3>
                <button>
                    <i class="fa-solid fa-volume-high"></i>
                </button>
            </div>
            <div class="details">
                <p>pos</p>
                <p>/sample/</p>
            </div>
            <p class="word-meaning">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate adipisci quae
            eligendi soluta debitis perspiciatis ipsum alias est. Id necessitatibus minima quibusdam. Dolorem, nostrum
            autem labore perspiciatis cumque dignissimos reprehenderit.
            </p>
            <p class="word-example">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque sit, consectetur a
            sed iusto accusamus asperiores reprehenderit laborum. Distinctio obcaecati voluptas nemo itaque architecto
            tempore magni animi. Voluptatibus, dolore nobis!
            </p>`;
    })
};