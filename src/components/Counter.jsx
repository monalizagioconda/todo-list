export default function Counter({ numberOfItemsPacked, totalNumberOfItems }) {
  return (
    <p>
      <b>{numberOfItemsPacked}</b> / {totalNumberOfItems} items checked
    </p>
  );
}
