import CreatingAd1SVG from "@/assets/services/smm/creating-ad_1.svg";
import CreatingAd2SVG from "@/assets/services/smm/creating-ad_2.svg";
import CreatingAd3SVG from "@/assets/services/smm/creating-ad_3.svg";

import { ISmmCreatingAdData, ISmmTeamMembers } from "./types";
import {
  ServiceBrandingIcon1,
  ServiceBrandingIcon2,
  ServiceBrandingIcon3,
  ServiceBrandingIcon4,
  ServiceBrandingIcon5,
} from "@/assets/services/branding";
import {
  Card1Icon,
  Card2Icon,
  Card3Icon,
  SeoHowWeWork2,
  SeoHowWeWork3,
  SeoHowWeWork4,
  SeoHowWeWork5,
} from "@/assets/services/seo";
import {
  ServiceSmmIcon1,
  ServiceSmmIcon2,
  ServiceSmmIcon3,
  ServiceSmmIcon4,
  ServiceSmmIcon5,
  ServiceSmmIcon6,
} from "@/assets/services/smm";
import {
  ServiceCrmIcon1,
  ServiceCrmIcon2,
  ServiceCrmIcon3,
} from "@/assets/services/crm";
import {
  ContextAd2Icon,
  ContextAd3Icon,
  ContextAd4Icon,
  ContextAd5Icon,
  ContextAd6Icon,
  ContextAdCard1Icon,
  ContextAdCard2Icon,
  ContextAdCard3Icon,
} from "@/assets/services/context-ad";

// SERVICES
// SMM
export const smmCreatingAdData: ISmmCreatingAdData = {
  eyebrow: "Инфлюенс-маркетинг",
  title: "Создаем рекламу, которой доверяют",
  sub_title:
    "Привлекаем блогеров и лидеров мнений, чтобы ваш бизнес стал доступнее для тысяч клиентов. ",
  items: [
    {
      image: "/images/services/smm/creating-ad_1.webp",
      icon: <CreatingAd1SVG />,
      title: "Тщательный подбор",
      description:
        "анализируем блогеров, их аудиторию и репутацию, чтобы сотрудничество принесло максимальный результат.",
    },
    {
      image: "/images/services/smm/creating-ad_2.webp",
      icon: <CreatingAd2SVG />,
      title: "Разработка креативных интеграций",
      description:
        "анализируем блогеров, их аудиторию и репутацию, чтобы сотрудничество принесло максимальный результат.",
    },
    {
      image: "/images/services/smm/creating-ad_3.webp",
      icon: <CreatingAd3SVG />,
      title: "Оценка эффективности",
      description:
        "измеряем охваты, вовлеченность и конверсии, чтобы вы видели, как инфлюенсеры влияют на рост вашего бизнеса.",
    },
  ],
};

//SMM
export const smmTeamMembers: ISmmTeamMembers = {
  title: "Ваш личный SMM-отдел из 6 экспертов",
  items: [
    {
      image: <ServiceSmmIcon1 />,
      number: "01",
      title: "Project Manager",
      description:
        "Координирует работу команды, управляет сроками и постоянно взаимодействует с вами для достижения поставленных целей.",
    },
    {
      image: <ServiceSmmIcon2 />,
      number: "02",
      title: "SMM-менеджер",
      description:
        "Разрабатывает стратегию продвижения, анализирует аудиторию и конкурентов, планирует контент и рекламные кампании.",
    },
    {
      image: <ServiceSmmIcon3 />,
      number: "03",
      title: "Мобилограф",
      description:
        "Создает динамичный визуальный контент: фото, видео, Reels — все, что привлекает и удерживает внимание аудитории.",
    },
    {
      image: <ServiceSmmIcon4 />,
      number: "04",
      title: "Графический дизайнер",
      description:
        "Разрабатывает уникальные визуальные решения, создавая графику, которая выделит ваш бренд среди конкурентов.",
    },
    {
      image: <ServiceSmmIcon5 />,
      number: "05",
      title: "Копирайтер",
      description:
        "Пишет тексты, которые цепляют и побуждают к действию: посты, заголовки, описания продуктов и услуг.",
    },
    {
      image: <ServiceSmmIcon6 />,
      number: "06",
      title: "Таргетолог",
      description:
        "Привлечет вашу целевую аудиторию и настроит рекламу для максимального количества заявок и новых клиентов.",
    },
  ],
};

//CRM
export const serviceCrmData: ISmmTeamMembers = {
  title: "Почему вашему бизнесу нужна CRM?",
  items: [
    {
      image: <ServiceCrmIcon1 />,
      number: "01",
      title: "Увеличение продаж",
      description:
        "Автоматизация рутинных задач и структурирование клиентских данных помогают сосредоточиться на главном — привлечении и удержании клиентов, что значительно повышает конверсию и общий объем продаж.",
    },
    {
      image: <ServiceCrmIcon2 />,
      number: "02",
      title: "Простота управления клиентами",
      description:
        "Все данные о клиентах собраны в одном месте, что упрощает доступ к информации и позволяет вашей команде выстраивать персонализированное взаимодействие.",
    },
    {
      image: <ServiceCrmIcon3 />,
      number: "03",
      title: "Экономия времени и ресурсов",
      description:
        "Оптимизация рабочих процессов снижает нагрузку на сотрудников, ускоряет выполнение задач и минимизирует ошибки, помогая снизить издержки.",
    },
    {
      image: <SeoHowWeWork5 />,
      number: "04",
      title: "Аналитика для роста",
      description:
        "Систематизированная CRM-платформа предоставляет глубокую аналитику и отчеты, которые помогают выявлять слабые места, принимать стратегические решения и улучшать бизнес-процессы.",
    },
  ],
};

export const serviceData = {
  title: "Наши услуги по интеграции CRM",
  items: [
    {
      image: "/images/services/crm/crm1.png",
      image_right: false,
      title: "Выбор и настройка CRM-системы",
      description: "",
      tags: [
        {
          tags: "Подбор наиболее подходящей CRM-платформы для вашего бизнеса.",
        },
        {
          tags: "Индивидуальная настройка системы под ваши требования.",
        },
      ],
    },
    {
      image: "/images/services/crm/crm2.png",
      image_right: true,
      title: "Миграция данных",
      description: "",
      tags: [
        {
          tags: "Безопасный и точный перенос данных из существующих систем.",
        },
        {
          tags: "Обеспечение целостности и сохранности информации.",
        },
      ],
    },
    {
      image: "/images/services/crm/crm3.png",
      image_right: false,
      title: "Автоматизация процессов",
      description: "",
      tags: [
        {
          tags: "Настройка автоматизированных рабочих процессов для повышения эффективности",
        },
        {
          tags: "Интеграция CRM с другими инструментами и системами вашего бизнеса.",
        },
      ],
    },
    {
      image: "/images/services/crm/crm4.png",
      image_right: true,
      title: "Обучение и поддержка",
      description: "",
      tags: [
        {
          tags: "Проведение обучающих сессий для вашей команды.",
        },
        {
          tags: "Предоставление технической поддержки и сопровождение после внедрения.",
        },
      ],
    },
  ],
};


