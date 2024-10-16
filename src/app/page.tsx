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
    </>
  );
}
