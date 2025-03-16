type CounterProps = {
  numberOfItemsPacked: number;
  totalNumberOfItems: number;
};

export default function Counter({ numberOfItemsPacked, totalNumberOfItems }: CounterProps) {
  return (
    <p>
      <b>{numberOfItemsPacked}</b> / {totalNumberOfItems} items checked
    </p>
  );
}
