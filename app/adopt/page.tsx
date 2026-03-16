import AdoptionListingCard from "@/components/AdoptionListingCard";

export default function AdoptPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full font-display">
      {/* Header & Search */}
      <div className="mb-8">
        <h2 className="text-4xl font-black mb-2">Find Your New Best Friend</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-6 text-lg">Over 200 animals are looking for their forever homes today.</p>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <input
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200  bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              placeholder="Search by name or breed..."
              type="text"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <select className="px-4 py-2 bg-white  border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-medium hover:border-primary focus:ring-primary outline-none cursor-pointer">
              <option>Species</option>
              <option>Dog</option>
              <option>Cat</option>
              <option>Other</option>
            </select>
            <select className="px-4 py-2 bg-white  border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-medium hover:border-primary focus:ring-primary outline-none cursor-pointer">
              <option>Age</option>
              <option>Puppy/Kitten</option>
              <option>Young</option>
              <option>Adult</option>
              <option>Senior</option>
            </select>
            <select className="px-4 py-2 bg-white  border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-medium hover:border-primary focus:ring-primary outline-none cursor-pointer">
              <option>Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
            <select className="px-4 py-2 bg-white  border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-medium hover:border-primary focus:ring-primary outline-none cursor-pointer">
              <option>Size</option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
              <option>Extra Large</option>
            </select>

          </div>
        </div>
      </div>

      {/* Animals Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <AdoptionListingCard
          name="Cooper"
          breed="Golden Retriever"
          age="2 years"
          gender="Male"
          location="Los Angeles, CA"
          status="Active"
          imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDQQe7llJk2j8X4XVpY5I2OW607zYxXGaWURjP9V8-3mwo6SvDS89Gt-bK7WRu6J6Ta8aVTwcgu-guiJOFnJLliW_tOztEg_aSwECRlOandDJm81MG-JJyYZpU7dq6-FtANdoSCC2kq1S3PxphOlSIf7O-dMko00wcnYZJDoHyZH2VHGuIattQAgJXbehZ1IEz97ioPYRL3tpYs1vUs5irUHczGQNzMghDjsDAUikPhDGSb_BvT31Xm9EkAGKUnkY76eoXRtb7KgzDL"
          imageAlt="Cooper"
          id="1"
        />
        <AdoptionListingCard
          name="Misty"
          breed="Domestic Shorthair"
          age="1 year"
          gender="Female"
          location="Seattle, WA"
          status="New"
          imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBkXmzSCXhH2ALbLUA9o7ixBlfJNv8bhF8m8VKePeSnw3tHx4mRPEY8s54d7yXEzH9maFs35yEOfRkq3yuFpg0OHNg81liKl1pYBZQyv0T7oickxjvD0vDO2-Q98Fx_3FmkBAACgZuAe4_9nqak5PfzDjQO4Oo_ZgZhfyae8mZ0LaHMq2Hnd-bs9aBK7DKJF2UPoxkpX1D1eys1jakbp4pDVYFn6-cVC84I1Pq1WCMbof3Ah4SwFvuFJL7neEuVWeXeUVxWf-56jAnu"
          imageAlt="Misty"
          id="2"
        />
        <AdoptionListingCard
          name="Rex"
          breed="German Shepherd"
          age="4 years"
          gender="Male"
          location="Chicago, IL"
          imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuCWOkiNfkdZbzauUkszLk_k_8a8oY7jpIOEVVYd7L7REwEtDKd7evqLfKNfUriAesmnfiO7Inj9NtqJ_n7rKRl8nCq10Qin9skmeWOIMixS81VlUIHQNc1-qae0YRJCuDtltRbXuuoIomUP71IEm2LvhR4ZeZC2LifxlBpEFinrdLYpIYfp4b0L7lVrw-hyH9EJ91jq5JmnKF0ctEKz7EQyvMcXSK2cZXw7hBTbRDPGes3DGCqYEcVVK4n0etq_vitL-z_1HXHr8q5a"
          imageAlt="Rex"
          id="3"
        />
        <AdoptionListingCard
          name="Coco"
          breed="French Bulldog"
          age="3 years"
          gender="Female"
          location="Miami, FL"
          imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuA1gHEX5yxbk2WSHVHt3S-KevItVian-bfeccKRiVpHrYc60ccTJGn_MmVwA97uhzeFlyZ8R_1ugo7KCFA9Q1sYFHNfFHbrh6PMcq_Rd3V5nafe1KR32VD4KQhqYd9I6htUEUQQ2HO6ElBNtmyqcfU27WGZ0ay8kUh4bJfFJuUN4IIgix9daM7-kcq-uhSTZOLs6l_ViAPfg5zcIaZ46lNB7tXyRcC2nuvTXkf02p9KOfKL1AfjQMmDapOHrw2P3t1LBpRIjMe4L3zF"
          imageAlt="Coco"
          id="4"
        />
        <AdoptionListingCard
          name="Barney"
          breed="Beagle"
          age="5 years"
          gender="Male"
          location="Austin, TX"
          imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuAbG1XZg9S9-ezD-10LhX56gtp00ZiS0TNkO5gInSIqFwLezG9-x5t1fEVFORb9z_06lCsJ3wCepYL25Qyan6_SJ-8udBPy4oYcMEy-LjCgJp7mZYrtWG2HiVYjUXT9NE9Cr5LN_1cJUSXLrsManpUJ6Dmau-Dv5rP7Cdkc1QxC7yaDA463AgFsDV09w8JeowA9R26JXPi1hJxKUKuJbHdWowMF-O0gbza-nil7NNQ5DzcnKFhlI9k29BXVjYJ4S_l0nIVuIHPr5nva"
          imageAlt="Barney"
          id="5"
        />
        <AdoptionListingCard
          name="Snowball"
          breed="Persian Cat"
          age="2 years"
          gender="Female"
          location="Portland, OR"
          imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuCIUW767Sve-aXHCT7KCNhT5rR2UIuWI1UBrArOR-oos7WpS14WRjQauBueT7x-68w3TxILuky7Mu_XGeeHSMkRbjVP7Tpj2xvuBsThA8cc1xudpEQjKfGG14HNY4MVadmabZpj5Fm-2j_HdirO43ObPXCjkgCLHESq-iG6ZwHMFdKz-wpZkHdM7uSyXidQBQoMkPt-Q8gUUGJO44vN2AFoD55B43D4mrie2x0r5KJ5fy8bBbyORlXH5LvLYqU4iq2IMEMHUVK30M2l"
          imageAlt="Snowball"
          id="6"
        />
        <AdoptionListingCard
          name="Buddy"
          breed="Labrador Mix"
          age="6 months"
          gender="Male"
          location="Denver, CO"
          imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuCezMOlFgr_4LtMmfX-azKVbUryCWrzndAreoNayx746PCjhZsbaeHt6wjXZpmUV4bdLK072MBoFSXSZHz-WLDQF28G7hEiAEl-kR39mQgUU6v7EmiQoeZUSzF-gMxVCE1LrUrsTvjMTVX8lRT1YEsfcA7Xt-GUYleTOzJzV8OQsfcsD2yC-_ubNt8WdJqNsrK2ZtsTOf6t_5FrbH1tdvncF6QvE8sALA_7K4sfQuGEAtnp-e__3c96hU1AkwqeKSB4mp5JU38P6ZHp"
          imageAlt="Buddy"
          id="7"
        />
        <AdoptionListingCard
          name="Shadow"
          breed="Bombay Cat"
          age="3 years"
          gender="Male"
          location="Boston, MA"
          imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBnY3UrG81V-C6YbaDKweatLagMjE8V9R4FOVa2CzA7nqTcT0GevC_xi9sR4UWaFS2QHs6MgIbbTMEGOXlxsA_0QOTmO8riXryP5ifQ0KkRfD27KFzpAzXm1j7sc88a2F-VLl1SK0gsKo-5w1WdH7xqiLiw79K_ZQdBWTx0-zhcViElBCGuRgQAu3NVzF4V4fSlhFX3WxPvL_jR7slGYRhw-k6_M1xJvRMSumXQjtCuNmXcLMopVSEFILV4sinWZ0-kmOCjZMz-IgXn"
          imageAlt="Shadow"
          id="8"
        />
      </div>

      {/* Load More */}
      <div className="mt-12 flex justify-center">
        <button className="px-8 py-3 border-2 border-primary cursor-pointer text-black font-bold rounded-xl hover:bg-primary transition-all">
          Load More Animals
        </button>
      </div>
    </main>
  );
}
