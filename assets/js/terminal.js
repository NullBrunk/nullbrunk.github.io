let userInput, terminalOutput;
let projAsk = false;
let lastCommands = [];

const COMMANDS = {
};

const app = () => {

  userInput = document.getElementById("userInput");
  terminalOutput = document.getElementById("terminalOutput");
  document.getElementById("keyboard").focus();

};

const execute = function executeCommand(input) {

  input = input.toLowerCase();
  
  lastCommands.push(input);
  
  let output;
  
  if (input.length === 0) {
    return;
  }
  

  if (input === "help") {
    terminalOutput.innerHTML = `<div class="terminal-line">
    
    <strong class="blue">clear:</strong> Clear the screen<br>
    <strong class="blue">echo:</strong>  Display something<br>
    <strong class="blue">help:</strong>  Display this help message<br>
    
    <br>

    <strong class="blue">note:</strong> You can do maths in this terminal
    <strong class="blue">example:</strong> 10 ** 3 + 400 - 63


  </div>`;

  } 
  
  else if (input === "clear") {
    clearScreen();
  } 

  else if (input.startsWith('echo')){
    terminalOutput.innerHTML = `<div class="terminal-line">
${input.split("echo")[1]}</div>`;

   
  }
  
  else {
  
    try{
      output = eval(input);
    }
    catch (e){
      output = input;
    }

    terminalOutput.innerHTML = `<br><div class="terminal-line">${output}<br></div>`;
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }
};

const key = (e) => {
  const input = userInput.innerHTML;

  if (e.key === "Enter") {
    execute(input);
    userInput.innerHTML = "";
    return;
  }

  userInput.innerHTML = input + e.key;
};

const backspace = (e) => {
  if (e.keyCode !== 8 && e.keyCode !== 46) {
    return;
  }
  userInput.innerHTML = userInput.innerHTML.slice(
    0,
    userInput.innerHTML.length - 1
  );
};


let iter = 0;
const up = (e) => {
  if (e.key === "ArrowUp") {
    if (lastCommands.length > 0 && iter < lastCommands.length) {
      iter += 1;
      userInput.innerHTML = lastCommands[lastCommands.length - iter];
    }
  }

  if (e.key === "ArrowDown") {
    if (lastCommands.length > 0 && iter > 1) {
      iter -= 1;
      userInput.innerHTML = lastCommands[lastCommands.length - iter];
    }
  }
};

function clearScreen() {
  terminalOutput.innerHTML = "";
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

document.addEventListener("keydown", up);

document.addEventListener("keydown", backspace);
document.addEventListener("keypress", key);
document.addEventListener("DOMContentLoaded", app);


class Terminal extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://kit.fontawesome.com/3f2db6afb6.js" crossorigin="anonymous"></script>
    <div class="terminal_window" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"></div>
    <div class="fakeMenu" style="margin-top: 5%">
      <div class="fakeButtons fakeClose"></div>
      <div class="fakeButtons fakeMinimize"></div>
      <div class="fakeButtons fakeZoom"></div>
    </div>
    <div class="fakeScreen">
      <div class="terminal-window primary-bg" onclick="document.getElementById('dummyKeyboard').focus();">
        <div class="terminal-output" id="terminalOutput">
          <div class="terminal-line">
            <span class="help-msg">Type <span class="help">"help"</span> to get started.</span>
              <br>
          </div>
        </div>
        <div class="terminal-line">
          <span class="success">➜</span>
          <span class="directory">~</span>
          <span class="user-input" id="userInput"></span>
          <span class="line anim-typewriter"></span>
          <input type="text" id="keyboard" class="dummy-keyboard" />
        </div>
      </div>
    </div>
  </div>
  `
  }
}

customElements.define("terminal-js", Terminal);