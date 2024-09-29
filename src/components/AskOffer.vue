<template>
  <div class="ask-offer container mt-3">
    <section class="d-flex flex-wrap flex-lg-nowrap gap-4">
      <div class="left">
        <h2 class="fw-bold mb-4 text-center text-lg-start">
          هل تريدين أن تكون أما ناجحة في تربية أطفالك؟
        </h2>
        <p>
          انضمي إلي البرنامج الأول من نوعه الذي يمكنك من فهم طفلك (تحت 13 سنة)
          ومعرفة كيفية التعامل معهز لقيادة خبراء تربية وتحت اشراف استشاريين
          نفسسين للاطفال من المانيا
        </p>
      </div>
      <div class="right">
        <img src="@/assets/landing.jpg" width="100%" alt="" />
      </div>
    </section>
    <div
      class="btn btn-primary px-4 mt-4 d-none d-md-block"
      style="width: 180px"
    >
      اطلبي البرنامج الان
    </div>
    <div
      class="btn btn-primary px-4 mt-4 d-block d-md-none m-auto"
      style="width: 150px"
    >
      احجز جلسة الان
    </div>
    <section class="text-center my-5">
      <div class="h4 fw-bold mb-3">
        تربية الاطفال ليست سهلة؟ نحن خنا لمساعدتِك !
      </div>
      <p>
        هدفنا في عرب ثيرابي - الطفولة والارشاد الوالدي: هو مساعدة الاهالي في
        الوصول الي علاقات صحبة مع اطفالهم ضمن الفئة(تحت 13 سنة). من خلال نصائح
        وخطط منهجية. باشراف خبراء محترفين وجاهزين لمساعدتك!
      </p>
    </section>
    <section class="psycho-problems text-center">
      <div class="h4 fw-bold mb-4">هل يعاني طفلك من احد هذه المشاكل؟</div>
      <ul class="d-flex flex-wrap">
        <li class="blue">نوبات الغضب</li>
        <li class="green">العناد</li>
        <li class="blue">الضرب</li>
        <li class="green">خلافات مع الاخوة</li>
        <li class="blue">الخوف</li>
        <li class="green">اضطرابات النوم</li>
        <li class="blue">التعلق</li>
        <li class="green">الحزن</li>
        <li class="blue">العصبية</li>
        <li class="green">بكاء</li>
        <li class="blue">الغيرة</li>
        <li class="green">مشاكل جنسية</li>
        <li class="blue">فرط حركة</li>
        <li class="green">مشاكل الثقة بالنفس</li>
      </ul>
      <div class="btn btn-primary px-5 mt-4">احصل على المساعدة</div>
    </section>
    <div class="what-present py-5">
      <div class="h4 fw-bold text-center mb-4">
        ما الذي نقدمه من خلال برنامج الطفولة والارشاد الوالدي؟
      </div>
      <div class="parent d-flex flex-wrap flex-lg-nowrap my-3">
        <div class="right-img">
          <img src="../assets/what-present.jpg" alt="" width="100%" />
        </div>
        <ul class="left-list">
          <li>
            <p>جلسة اونلاين فريدية بين الام والمستشار التربوي مدتها ساعة.</p>
          </li>
          <li>
            <p>
              6 فيديوهات مسجلة, مدة كل فيديو ساعة ونصف, تتضمن بعض ما تحتاجه
              الامهات من حلول وطرق للتعامل مع اطفالهم.
            </p>
          </li>
          <li>
            <p>
              6 جلسات جماعية تفاعلية اسبوعيا مع خبير تربية لتلقي الاستفسارات
              وطرح الاسئلة
            </p>
          </li>
          <li>
            <p>
              متابعة طوال مدة البرنامج واشراف من قبل مختص ضمن مجموعة واتساب تضم
              جميع المشاركين
            </p>
          </li>
          <li>
            <p>امكانية وصول مستمرة للمحتوى حتى بعد انتهاء البرنامج.</p>
          </li>
        </ul>
      </div>
      <div class="d-flex justify-content-center">
        <div class="btn btn-primary px-5 mt-4">تعرَّفي على مواضيع البرنامج</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.ask-offer {
  @media (max-width: 767px) {
    & {
      flex-wrap: wrap;
    }
  }
  @media (min-width: 768px) {
    & {
      flex-wrap: nowrap;
      .left,
      .right {
        width: 48%;
      }
    }
  }
  .psycho-problems {
    ul {
      justify-content: space-evenly;
      gap: 10px;
      li {
        padding: 3px 8px;
        border-radius: 5px;
      }
      li.blue {
        background: #c7f5c9a8;
      }
      li.green {
        background: #e7fcff85;
      }
    }
  }
  .what-present {
    .parent {
      gap: 30px;
      ul.left-list {
        margin-bottom: 0;
        margin-right: 20px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        li {
          position: relative;
          &::before {
            content: "";
            position: absolute;
            right: -20px;
            top: 10px;
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background-color: #000;
          }
        }
      }
    }
  }
}
</style>
