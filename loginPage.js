export function loginPage() {
      const div = document.createElement("div");
     
        
      
        div.innerHTML = `
          <div class="flex justify-center items-center p-[2rem] ml-[6rem]  h-screen">
             <div class="container w-[1300px] h-[650px]  bg-white shadow-xl  shadow-[#1d1c1c] rounded-[50px]  flex justify-center items-center ">
                <div class="content  w-[90rem] h-[42rem] rounded-[50px]   flex flex-row ">
                    <div class=" w-1/2 h-full rounded-tl-[50px] rounded-bl-[50px] bg-orange-300 ">
                        <img src="login.png" class="w-full h-full object-contain" alt="">

                    </div>

                    <div class="w-1/2 h-full bg-white rounded-tr-[50px] rounded-br-[50px] flex justify-center items-center">
                      <div class="flex flex-col justify-center h-[50%] w-[80%] gap-5 items-center shadow-xl  shadow-[#FDBA74] rounded-xl">
                          <div>
                                <label for="login" class=" font-bold block">Login:</label>
                                <input type="text" class="w-full h-[50px] px-4 border-2 rounded-[50px] shadow-xl" placeholder="   Entrer votre login">

                          </div>
                          <div>
                                <label for="mdp" class="font-bold block">Mot de passe : </label>
                                <input type="text" class="w-full h-[50px] border-2 px-4 rounded-[50px] shadow-xl" placeholder="   Entrer votre mot de passe">
                          </div>
                            <button type="submit" id="ajout" class=" w-[100px] h-[30px] bg-[#e7b871] text-white font-bold rounded-[20px] hover:bg-[#e7d0ac]">Ajouter</button>

                      </div>
                    </div>
                </div>
              </div>
            </div>
          
        `;
      
        return div;
      
    
}