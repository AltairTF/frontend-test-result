import React from "react";

function CustomCard(props) {
  const data = props.data;
  const search = (search) => {
    props.setFilters({
      ...props.filters,
      search,
    });
  };

  const sort = (sort) => {
    props.setFilters({
      ...props.filters,
      sort,
    });
  };

  const loadMore = () => {
    props.setFilters({
      ...props.filters,
      page: props.filters.page + 1,
    });
  };

  return (
    <>
      <div className="divider" />
      <div className="w-full h-auto flex items-center space-x-2 my-2">
        <input
          className="input input-bordered border-yellow-200 hover:border-yellow-500 w-3/4"
          placeholder="Search by Name"
          onKeyUp={(e) => search(e.target.value)}
        />
        <div className="w-1/4">
          <select
            className="select select-bordered border-yellow-200 hover:border-yellow-500 w-full p-x-5"
            onChange={(e) => sort(e.target.value)}
          >
            <option>Select</option>
            <option value="asc">Ibu - Ascending</option>
            <option value="desc">Ibu - Descending</option>
          </select>
        </div>
      </div>
      {data.map((x, index) => {
        return (
          <div
            key={index}
            className="card lg:card-side shadow-xl hover:shadow-yellow-200/10 my-6 bg-base-200"
          >
            <div className="card-body">
              <p className="card-title text-4xl text-yellow-200">{x.name}</p>

              <div className="flex w-full">
                <div className="min-w-[160px] whitespace-nowrap">
                  <p className="font-bold text-accent">Category</p>
                  <p>{x.category ? x.category : "N/A"}</p>
                </div>
                <div className="divider divider-vertical" />
                <div className="min-w-[160px] whitespace-nowrap">
                  <p className="font-bold text-accent">ABV</p>
                  <p>{x.abv ? x.abv.toFixed(2) : "N/A"}</p>
                </div>
                <div className="divider divider-vertical" />
                <div className="min-w-[160px] whitespace-nowrap">
                  <p className="font-bold text-accent">IBU</p>
                  <p>{x.ibu ? x.ibu : "N/A"}</p>
                </div>
              </div>
              <div className="divider " />
              <div className="flex w-full ">
                <div className="min-w-[160px] whitespace-nowrap">
                  <p className="font-bold text-accent">Country</p>
                  <p>{x.country ? x.country : "N/A"}</p>
                </div>
                <div className="divider divider-vertical" />
                <div className="min-w-[160px] whitespace-nowrap">
                  <p className="font-bold text-accent">State</p>
                  <p>{x.state ? x.state : "N/A"}</p>
                </div>
                <div className="divider divider-vertical" />
                <div className="min-w-[160px] whitespace-nowrap">
                  <p className="font-bold text-accent">City</p>
                  <p>{x.city ? x.city : "N/A"}</p>
                </div>
                <div className="divider divider-vertical" />
                <div className="min-w-[250px] whitespace-nowrap">
                  <p className="font-bold text-accent">Address</p>
                  <p>{x.address ? x.address : "N/A"}</p>
                </div>
                <div className="divider divider-vertical" />
                <div className="min-w-[160px] whitespace-nowrap">
                  <p className="font-bold text-accent">Website</p>
                  <p>
                    {x.website ? (
                      <a
                        className="link text-yellow-200 hover:text-yellow-500"
                        href={x.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {x.website}
                      </a>
                    ) : (
                      "N/A"
                    )}
                  </p>
                </div>
              </div>
              <div className="divider" />
              <div className="flex w-full ">
                <div className="whitespace-pre-wrap">
                  <p className="font-bold text-accent">Description</p>
                  <p>{x.description ? x.description : "N/A"}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="divider" />

      <div className="flex justify-center mt-4">
        <button
          className="btn border-none text-black bg-yellow-200 hover:bg-yellow-500 shadow-md"
          onClick={loadMore}
        >
          Load More
        </button>
      </div>
    </>
  );
}

export default CustomCard;
