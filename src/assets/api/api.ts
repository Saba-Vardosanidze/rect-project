export const catAndDogApi = async () => {
  const catApi = "https://api.thecatapi.com/v1/images/search?limit=10";
  const dogApi = "https://dog.ceo/api/breeds/image/random";

  const [dogRef, catRef] = await Promise.all([
    fetch(dogApi).then((res) => res.json()),
    fetch(catApi).then((res) => res.json()),
  ]);

  const cat = {
    url: catRef[0]?.url,
    isDog: false,
  };
  const dog = {url: dogRef?.message, isDog: true};

  return [cat, dog];
};
