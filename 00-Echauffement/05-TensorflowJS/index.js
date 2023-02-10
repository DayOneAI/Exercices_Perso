async function run() {
  const myTensor = tf.tensor([0, 1, 2]);
  console.log(`myTensor rank est égal à ${myTensor.rank}`);

  console.log(`myTensor shape est égal à ${myTensor.shape}`);

  console.log(myTensor);

  myTensor.print();
}

if (document.readyState !== "loading") {
  run();
} else {
  document.addEventListener("DOMContentLoaded", run);
}
