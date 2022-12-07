function Character (name,strength,health){
    this.name = name
    this.strength = strength
    this.health = health

    this.attackBtn = document.querySelector(`#${this.name}-attack`)
    this.healthkBtn = document.querySelector(`#${this.name}-make-health`)
    this.progress = document.querySelector(`.${this.name}-health span`)
    this.alive = document.querySelector(`#${this.name}-alive`)
}

Character.prototype.attack = function(opponent){
  
    if(opponent.health > 0){
        opponent.health -= this.strength
        opponent.progress.style.width = `${opponent.health}%`
    }
    else{
        opponent.attackBtn.remove()
        opponent.healthkBtn.remove()
        opponent.alive.innerHTML = `${opponent.name}: is died`
    }
}

Character.prototype.status = function(){
    
}
Character.prototype.makeHealth = function(){
    if(this.health < 100){
       this.health += 10
      this.progress.style.width = `${this.health}%`
    }

    if(this.health > 100){
        this.health = 100
    }
}

let nartoo = new Character ('nartoo',10,100)
let sasakii = new Character ('sasakii',5,100)

nartoo.attackBtn.addEventListener('click',function(){
    nartoo.attack(sasakii)
    sasakii.status()
})
sasakii.attackBtn.addEventListener('click',function(){
    sasakii.attack(nartoo)
    nartoo.status()
})

nartoo.healthkBtn.addEventListener('click',function(){
    nartoo.makeHealth()
})

sasakii.healthkBtn.addEventListener('click',function(){
    sasakii.makeHealth()
})