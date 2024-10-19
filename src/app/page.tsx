import {
  TopBar,
  Title,
  Container,
  SortPopup,
  Categories,
} from "@/components/shared/index";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />

      <Container className="pb-14">
        <div className="flex gap-[60px]">
          {/* Filtration */}
          <div className="w-[250px]">{/* <Filters /> */}</div>

          {/* Products list */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">Список товаров</div>
          </div>
        </div>
      </Container>
    </>
  );
}
