export function useDisableButtons() {
  function exec() {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      button.setAttribute("disabled", "true");
    });
  }

  function undo() {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      button.removeAttribute("disabled");
    });
  }

  return { exec, undo };
}
