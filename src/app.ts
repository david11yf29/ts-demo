// autobind decorator
function autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      const boundFn = originMethod.bind(this);
      return boundFn;
    }
  };
  return adjDescriptor
}

// ProjectInput class
class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  // 把 form 抓到 app 裡面
  constructor() {
    // 抓 template1 ( 裡面有form )
    this.templateElement = document.getElementById("project-input")! as HTMLTemplateElement;
    // 抓 app 
    this.hostElement = document.getElementById("app")! as HTMLDivElement; 
    // importedNode = this.template.content 裡面有 form
    const importedNode = document.importNode(this.templateElement.content, true);

    // 抓取 form
    this.element = importedNode.firstElementChild as HTMLFormElement;
    this.element.id = 'user-input';

    this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement;
    this.descriptionInputElement = this.element.querySelector('#description') as HTMLInputElement;
    this.peopleInputElement = this.element.querySelector('#people') as HTMLInputElement;

    this.configure();
    this.attach();
  }

  @autobind
  private submitHandler(event: Event) {
    event.preventDefault();
    // console.log("1", this);
    // this 指 form
    console.log(this.titleInputElement.value)
  }

  private configure() {
    // console.log("2", this);
    // this 指 ProjectInput
    this.element.addEventListener('submit', this.submitHandler);
  }

  private attach() {
    this.hostElement.insertAdjacentElement('afterbegin', this.element);
  }
}

const prjInput = new ProjectInput();