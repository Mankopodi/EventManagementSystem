import React from "react";

function MultStep() {

    class Form {
        constructor (el) {
          this.el = el
          this.items = [].slice.call(this.el.querySelectorAll('.codepen-form__item'))
          this.inputs = this.items.map(item => item.querySelector('.form-control'))
          this.activeIndex = 0
      
          this.setEvents()
        }
      
        setEvents () {
          this.setKeyDown()
        }
      
        setKeyDown () {
          window.addEventListener('keydown', e => {
            // Enter
            if (e.keyCode === 13) {
              e.preventDefault()
      
              this.active = false
              this.activeIndex += 1
      
              if (this.activeIndex > this.items.length - 1) {
                this.setFormModifierClass()
                this.showAllItems()
              } else {
                this.setActiveClass()
              }
            }
      
            // Any
            if (!this.active) {
              this.inputs[this.activeIndex].focus()
            }
          })
        }
      
        setActiveClass () {
          this.items.forEach((item, index) => {
            if (index === this.activeIndex) {
              item.classList.add('active')
            } else {
              item.classList.remove('active')
            }
          })
        }
      
        showAllItems () {
          this.items.forEach(item => {
            item.classList.add('active')
          })
        }
      
        setFormModifierClass () {
          this.el.classList.add('codepen-form--complete')
        }
      }
      
      const codepenFormElement = document.querySelector('.codepen-form')
      const codepenForm = new Form(codepenFormElement)

      
  return <div className="min-h-screen">
    <form action="#" class="codepen-form" autocomplete="off">
  <div class="codepen-form__inner">
    <div class="codepen-form__item form-group active">
      <input type="email" class="form-control" id="form-email"/>
      <label for="form-email">Enter your email address</label>
    </div>
    <div class="codepen-form__item form-group">
      <input type="text" class="form-control" id="form-name"/>
      <label for="form-name">Enter your name</label>
    </div>
    <div class="codepen-form__item form-group">
      <input type="text" class="form-control" id="form-phone"/>
      <label for="form-phone">Enter your phone number</label>
    </div>
    <div class="codepen-form__item form-group">
      <input type="text" class="form-control" id="form-shoe"/>
      <label for="form-shoe">Enter your shoe size</label>
    </div>
    <div class="codepen-form__item form-group">
      <input type="text" class="form-control" id="form-drink"/>
      <label for="form-drink">Enter your favorite drink</label>
    </div>
    <div class="btn-group">
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </div>
</form>

  </div>;
}

export default MultStep;
