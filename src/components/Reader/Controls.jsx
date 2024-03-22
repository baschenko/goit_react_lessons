export const Controls = ({ onChange, currentIndex, total }) => {
  return (
    <section>
      <button
        type="button"
        disabled={currentIndex === 1}
        onClick={() => onChange(-1)}
      >
        Назад
      </button>
      <button
        type="button"
        disabled={currentIndex === total}
        onClick={() => onChange(+1)}
      >
        Вперед
      </button>
    </section>
  );
};
