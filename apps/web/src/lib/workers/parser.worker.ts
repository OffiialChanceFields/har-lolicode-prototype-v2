// This file is a placeholder for the parsing web worker.
// It would handle running the HAR parsing in a separate thread to avoid UI blocking.

addEventListener('message', event => {
  console.log('Parser worker received:', event.data);
  // Post back a dummy message
  postMessage({ status: 'completed', result: 'parsing_done' });
});
