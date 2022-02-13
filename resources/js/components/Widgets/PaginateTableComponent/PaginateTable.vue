<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item">
        <a class="page-link" @click="getCategories()"
          ><i class="fas fa-angle-double-left"></i
        ></a>
      </li>
      <li class="page-item">
        <a
          class="page-link"
          @click="getCategories(currentpage - 1 < 1 ? 1 : currentpage - 1)"
        >
          <i class="fas fa-chevron-left"></i>
        </a>
      </li>
      <div v-if="currentpage > paginateLimit">
        <li class="page-item">
          <a class="page-link" @click="getCategories(currentpage - 1)">..</a>
        </li>
      </div>
      <div v-for="(link, index) in links" :key="index">
        <div
          v-if="
            index >= currentpage - paginateLimit &&
            index <= currentpage + paginateLimit
          "
        >
          <div v-if="index + 1 == currentpage">
            <li class="page-item active">
              <a class="page-link">{{ link.label }}</a>
            </li>
          </div>
          <div v-else>
            <li class="page-item">
              <a class="page-link" @click="getCategories(index + 1)">{{
                link.label
              }}</a>
            </li>
          </div>
        </div>
      </div>
      <div v-if="currentpage < currentpage - paginateLimit">
        <li class="page-item">
          <a class="page-link" @click="getCategories(link.label)">..</a>
        </li>
      </div>
      <li class="page-item">
        <a
          class="page-link"
          @click="
            getCategories(
              currentpage + 1 > lastpage ? lastpage : currentpage + 1
            )
          "
        >
          <i class="fas fa-chevron-right"></i>
        </a>
      </li>
      <li class="page-item">
        <a class="page-link" @click="getCategories(lastpage)"
          ><i class="fas fa-angle-double-right"></i
        ></a>
      </li>
    </ul>
  </nav>
</template>

<script>
import Paginate from "./Paginate";
export default Paginate;
</script>
