export class Testimonio {
  constructor(avatar, paragraph, alt, name, plan) {
    this.avatar = avatar;
    this.paragraph = paragraph;
    this.alt = alt;
    this.name = name;
    this.plan = plan;
  }
  get avatar() {
    return this.avatar;
  }
  get paragraph() {
    return this.paragraph;
  }
  get alt() {
    return this.alt;
  }
  get name(){
    return this.name;
  }
  get plan(){
    return this.plan;
  }
  set avatar(newAvatar) {
     this.avatar = newAvatar;
  }
  set paragraph(newParagraph) {
    this.paragraph=newParagraph;
  }
  set alt(newAlt) {
    this.alt = newAlt;
  }
  set name(newName){
    this.name=newName;
  }
  set plan(newPlan){
    this.plan=newPlan;
  }
}
