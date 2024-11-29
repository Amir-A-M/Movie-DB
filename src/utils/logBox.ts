import { LogBox as BaseLogBox } from 'react-native';

// Auxiliary variable to store exceptions
let warnExceptions: string[] = [];

// Store the original function
const console_warn = console.warn;
const console_error = console.error;

// Override `console.warn` to exclude specific warnings
console.warn = (...args) => {
  const isException = warnExceptions.some(ex => args[0]?.startsWith(ex));
  if (isException) return;

  // Call the original `console.warn`
  console_warn(...args);
};
console.error = (...args) => {
  const isException = warnExceptions.some(ex => args[0]?.startsWith(ex));
  if (isException) return;

  // Call the original `console.error`
  console_error(...args);
};

// Override the `LogBox` methods to add exclusions
export let LogBox = { ...BaseLogBox };

LogBox.ignoreLogs = (messages: string[]) => {
  warnExceptions = [...warnExceptions, ...messages]; // Only strings allowed

  // Call the original method
  BaseLogBox.ignoreLogs(messages);
};

LogBox.ignoreAllLogs = () => {
  // This works because all strings start with ''
  warnExceptions = [''];

  // Call the original method
  BaseLogBox.ignoreAllLogs();
};
