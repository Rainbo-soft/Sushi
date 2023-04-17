import React from "react";
import img from "../../assets/about us 1.jpg";
import img1 from "../../assets/about us 2.jpg";
import img2 from "../../assets/about us 3.jpg";

const About = () => {
  return (
    <div>
      <div className="lg:grid grid-cols-2 gap-5 mt-3">
        <div className="flex flex-col justify-center lg:ml-20 px-5 lg:px-0 md:mt-10">
          <h1 className="font-bold text-center text-5xl capitalize Kurale">
            About Us
          </h1>
          <p className="border-b border-gray-400 pb-3 mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            saepe tenetur aliquid optio delectus ab, eveniet quasi inventore eum
            necessitatibus consequuntur excepturi, nulla minima aperiam
            recusandae eos asperiores quas in voluptatum nobis rerum quos sed
            quae quo! Earum sequi veniam aut deleniti corporis quidem ea velit
            eaque nulla assumenda vero, pariatur maiores harum illo beatae hic
            perspiciatis eum laudantium repudiandae voluptas eveniet, eos
            delectus error explicabo! Dolorum deleniti totam exercitationem
            sapiente reprehenderit, voluptas delectus quis vel illum magnam
            soluta excepturi eum hic ratione aspernatur magni nostrum. Tempora
            quibusdam fuga ea dolorem laborum dolorum culpa, iusto numquam nobis
            consequatur debitis ratione.
          </p>
          <h3 className="mt-5 font-bold">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Necessitatibus quibusdam incidunt repellendus odit a fugit ea,
            veritatis possimus eum consequuntur!
          </h3>
          <h5 className="mt-5 text-left">
            Delivery in 45 to 60 minutes (depending on traffic).
          </h5>
          <h5 className="font-bold mt-5">
            Delivery Hours: 14:00{" "}
            <span className="font-normal">22:00 (Monday to Sunday)</span>
          </h5>
          <h3 className="my-5 font-bold text-xl border-b border-gray-400 pb-3 Kurale">
            SUNDAY - CLOSED
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            molestias exercitationem cum eaque ducimus eius impedit earum ut id,
            alias architecto rem, amet enim aut illo cupiditate veritatis ab
            voluptate provident? Molestias accusantium perspiciatis alias
            repellendus officiis dolorum! Sed dicta corrupti error voluptates
            facere voluptas totam rerum distinctio ipsum iste.
          </p>
          <h3 className="my-5 font-bold text-xl Kurale">
            Come try it today. You won't be disappointed!
          </h3>
        </div>
        <div className="hidden lg:block">
          <img src={img} alt="" />
        </div>
      </div>
      <div className="flex flex-col-reverse lg:grid grid-cols-2 gap-5 mt-5">
        <div className="lg:pl-10 flex items-center justify-center px-5 lg:px-0">
          <img src={img1} alt="" />
        </div>
        <div className="px-5">
          <h1 className="text-center font-bold text-4xl mb-3 Kurale">
            King of sushi
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            non ullam perspiciatis, quia culpa et quod consequatur numquam nihil
            maiores pariatur, molestias, nam sit ea placeat iste laudantium
            obcaecati error eum repudiandae quas aliquid! Commodi blanditiis
            saepe voluptatibus nemo possimus? Tempora ratione iusto labore
            voluptatum? Temporibus aliquam ut, reiciendis ipsa nesciunt itaque
            dolor ullam aperiam et doloremque error inventore illo fugiat, hic,
            distinctio mollitia. Sed ipsa obcaecati sit voluptatum facere
            repudiandae, recusandae, in quae repellendus harum optio? Vero
            mollitia nam atque quod molestias est obcaecati, maiores eum ipsam,
            tenetur delectus, consequatur unde beatae vitae alias saepe officiis
            blanditiis voluptatum ullam reprehenderit. Aperiam voluptatem saepe
            consequatur non, earum totam quae! Quam nihil fugit soluta dolore
            cum laudantium at deserunt illo nisi laboriosam odit, reiciendis
            velit excepturi quae nam dolorum, omnis aspernatur.
          </p>
          <p className="mt-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repudiandae quam dignissimos amet nulla dicta! Harum eos dicta
            ducimus delectus laboriosam esse, repudiandae temporibus, officia
            nisi voluptatem veniam nesciunt sunt numquam fuga facilis aliquam
            tempora officiis cum nulla doloribus blanditiis! Doloremque nihil,
            ducimus ea unde dignissimos deserunt saepe temporibus quia fugiat
            laboriosam quas sapiente odio tempore similique nesciunt aperiam
            atque est ratione, recusandae iure laudantium debitis ipsum quasi
            sit. Voluptatem quae aliquam eligendi, quos deleniti, quo maxime,
            est rem quibusdam itaque officiis nulla. Laudantium blanditiis
            excepturi, laboriosam quo doloribus est quos inventore libero
            repellat aperiam, totam facilis atque amet. Provident, perspiciatis?
          </p>
        </div>
      </div>
      <div className="mt-10 md:w-11/12 mx-auto">
        <h1 className="text-center font-bold text-5xl Kurale leading-tight">
          The perfect place for
          <br />
          your group dinners and events
        </h1>
        <p className="mt-5 text-center leading-6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          <br />
          Consequuntur, veritatis? Aliquid adipisci eveniet dignissimos ex.
          Incidunt <br />
          ipsam doloremque dolorum ab!
        </p>
      </div>
      <div className="mt-5">
        <img src={img2} alt="" />
      </div>
    </div>
  );
};

export default About;
