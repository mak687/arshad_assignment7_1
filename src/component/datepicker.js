function DateTime() {
  const currdate = new Date().toLocaleString();

  return (
    <>
      <p>Current Date is: {currdate}</p>
    </>
  );
}

export default DateTime;
