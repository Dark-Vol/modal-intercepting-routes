export default function AmericanoInfo() {
  return (
    <section
      className="
    mx-auto 
    max-w-3xl 
    space-y-4 
    text-center
    "
    >
      <h2
        className="
      text-3xl 
      font-semibold
      "
      >
        Что такое американо?
      </h2>
      <p
        className="
      text-lg 
      text-muted-foreground
      "
      >
        Американо — это эспрессо, разбавленный горячей водой. Напиток сохраняет
        аромат и крепость эспрессо, но становится более мягким и объемным,
        напоминая по насыщенности фильтр-кофе.
      </p>
      <div
        className="
      grid 
      gap-4 
      text-left 
      sm:grid-cols-2
      "
      >
        <div
          className="
        rounded-xl 
        border 
        border-border 
        p-4
        "
        >
          <h3
            className="
          text-xl 
          font-medium
          "
          >
            Как готовят
          </h3>
          <p
            className="
          text-muted-foreground
          "
          >
            Бариста сначала готовит один или два шота эспрессо, затем добавляет
            в чашку горячую воду. Соотношение воды и эспрессо подбирается по
            вкусу, обычно от 1:1 до 1:3.
          </p>
        </div>
        <div
          className="
        rounded-xl 
        border 
        border-border 
        p-4
        "
        >
          <h3
            className="
          text-xl font-medium
          "
          >
            В чём особенность
          </h3>
          <p
            className="
          text-muted-foreground
          "
          >
            Напиток остаётся ароматным, но менее концентрированным. Американо
            подходит тем, кто любит длительное кофейное послевкусие без
            чрезмерной горечи.
          </p>
        </div>
      </div>
    </section>
  );
}
