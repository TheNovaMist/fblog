<template>
  <el-row class="bg-neutral-100 flex justify-center h-full">
    <el-col :span="20" class="bg-white px-16">
      <div
        class="article-info bg-gradient-to-r from-emerald-300 to-teal-500 p-8 my-8 flex justify-around flex-col"
      >
        <h2 class="my-4">
          <strong>{{ db_post.title }}</strong>
        </h2>
        <div class="timeAndView my-4">
          <span class="article-time">
            <el-icon><Clock /></el-icon>
            发表于：<span>{{ db_post.createAt }}</span>
          </span>
          &nbsp;|&nbsp;
          <span class="article-views">
            <el-icon><View /></el-icon>
            阅读量：<span>1</span>万
          </span>
        </div>
        <p class="abstract my-4">
          {{ db_post.description }}
        </p>
      </div>
      <hr />
      <!-- <div class="article-content">
        <p>
          官方地址：
          <a href="https://swagger.io/" rel="nofollow" target="_blank"
            >https://swagger.io/</a
          >
        </p>

        <p>springboot整合非常简单，易学易用，步骤如下：</p>

        <p>&nbsp;</p>

        <h3><a name="t0" />1、pom.xml所需依赖</h3>

        <pre
          class="has"
          name="code"
          onclick="hljs.signin(event)"
        ><code class="language-html hljs xml"><ol class="hljs-ln"><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="1" /></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-tag">&lt;<span class="hljs-name">dependency</span>&gt;</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="2" /></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-tag">&lt;<span class="hljs-name">groupId</span>&gt;</span>org.springframework.boot<span class="hljs-tag">&lt;/<span class="hljs-name">groupId</span>&gt;</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="3" /></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-tag">&lt;<span class="hljs-name">artifactId</span>&gt;</span>spring-boot-starter-web<span class="hljs-tag">&lt;/<span class="hljs-name">artifactId</span>&gt;</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="4" /></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-tag">&lt;/<span class="hljs-name">dependency</span>&gt;</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="5" /></div><div class="hljs-ln-code"><div class="hljs-ln-line" /></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="6" /></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-tag">&lt;<span class="hljs-name">dependency</span>&gt;</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="7" /></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-tag">&lt;<span class="hljs-name">groupId</span>&gt;</span>io.springfox<span class="hljs-tag">&lt;/<span class="hljs-name">groupId</span>&gt;</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="8" /></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-tag">&lt;<span class="hljs-name">artifactId</span>&gt;</span>springfox-swagger2<span class="hljs-tag">&lt;/<span class="hljs-name">artifactId</span>&gt;</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="9" /></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-tag">&lt;<span class="hljs-name">version</span>&gt;</span>2.8.0<span class="hljs-tag">&lt;/<span class="hljs-name">version</span>&gt;</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="10" /></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-tag">&lt;/<span class="hljs-name">dependency</span>&gt;</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="11" /></div><div class="hljs-ln-code"><div class="hljs-ln-line" /></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="12" /></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-tag">&lt;<span class="hljs-name">dependency</span>&gt;</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="13" /></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-tag">&lt;<span class="hljs-name">groupId</span>&gt;</span>io.springfox<span class="hljs-tag">&lt;/<span class="hljs-name">groupId</span>&gt;</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="14" /></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-tag">&lt;<span class="hljs-name">artifactId</span>&gt;</span>springfox-swagger-ui<span class="hljs-tag">&lt;/<span class="hljs-name">artifactId</span>&gt;</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="15" /></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-tag">&lt;<span class="hljs-name">version</span>&gt;</span>2.8.0<span class="hljs-tag">&lt;/<span class="hljs-name">version</span>&gt;</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="16" /></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-tag">&lt;/<span class="hljs-name">dependency</span>&gt;</span></div></div></li></ol></code><div class="hljs-button signin" data-title="登录后复制" /></pre>

        <h3>&nbsp;</h3>

        <h3><a name="t2" />2、配置swagger2</h3>

        <p><strong>新建Swagger2Config.java文件，在扫包范围内</strong></p>

        <pre
          class="has"
          name="code"
          onclick="hljs.signin(event)"
        ><code class="hljs java"><ol class="hljs-ln" style="width:1043px"><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="1" /></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-meta">@Configuration</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="2" /></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-meta">@EnableSwagger</span>2</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="3" /></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-keyword">public</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Swagger2Config</span> </span>{</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="4" /></div><div class="hljs-ln-code"><div class="hljs-ln-line" /></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="5" /></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-meta">@Bean</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="6" /></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-function"><span class="hljs-keyword">public</span> Docket <span class="hljs-title">createRestApi</span><span class="hljs-params">()</span> </span>{</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="7" /></div><div class="hljs-ln-code"><div class="hljs-ln-line">        <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> Docket(DocumentationType.SWAGGER_2).produces(Sets.newHashSet(<span class="hljs-string">"application/json"</span>))</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="8" /></div><div class="hljs-ln-code"><div class="hljs-ln-line">                .consumes(Sets.newHashSet(<span class="hljs-string">"application/json"</span>)).protocols(Sets.newHashSet(<span class="hljs-string">"http"</span>, <span class="hljs-string">"https"</span>))</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="9" /></div><div class="hljs-ln-code"><div class="hljs-ln-line">                .apiInfo(apiInfo()).forCodeGeneration(<span class="hljs-keyword">true</span>).useDefaultResponseMessages(<span class="hljs-keyword">false</span>).select()</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="10" /></div><div class="hljs-ln-code"><div class="hljs-ln-line">                <span class="hljs-comment">// 指定controller存放的目录路径</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="11" /></div><div class="hljs-ln-code"><div class="hljs-ln-line">                .apis(RequestHandlerSelectors.basePackage(<span class="hljs-string">"cn.fzy.controller"</span>)).paths(PathSelectors.any()).build();</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="12" /></div><div class="hljs-ln-code"><div class="hljs-ln-line">    }</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="13" /></div><div class="hljs-ln-code"><div class="hljs-ln-line" /></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="14" /></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-function"><span class="hljs-keyword">private</span> ApiInfo <span class="hljs-title">apiInfo</span><span class="hljs-params">()</span> </span>{</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="15" /></div><div class="hljs-ln-code"><div class="hljs-ln-line">        <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> ApiInfoBuilder()</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="16" /></div><div class="hljs-ln-code"><div class="hljs-ln-line">                <span class="hljs-comment">// 文档标题</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="17" /></div><div class="hljs-ln-code"><div class="hljs-ln-line">                .title(<span class="hljs-string">"swagger2测试api文档"</span>)</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="18" /></div><div class="hljs-ln-code"><div class="hljs-ln-line">                <span class="hljs-comment">// 文档描述</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="19" /></div><div class="hljs-ln-code"><div class="hljs-ln-line">                .description(<span class="hljs-string">"这里填写API接口文档简要描述"</span>)</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="20" /></div><div class="hljs-ln-code"><div class="hljs-ln-line">                <span class="hljs-comment">// 系统版本号</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="21" /></div><div class="hljs-ln-code"><div class="hljs-ln-line">                .version(<span class="hljs-string">"v1"</span>).license(<span class="hljs-string">"MIT 协议"</span>).licenseUrl(<span class="hljs-string">"http://www.opensource.org/licenses/MIT"</span>)</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="22" /></div><div class="hljs-ln-code"><div class="hljs-ln-line">                <span class="hljs-comment">// 联系人姓名、网址、邮箱</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="23" /></div><div class="hljs-ln-code"><div class="hljs-ln-line">                .contact(<span class="hljs-keyword">new</span> Contact(<span class="hljs-string">"fzy"</span>, <span class="hljs-string">"Http://www.fengziy.cn"</span>, <span class="hljs-string">"fengziy@aliyun.com"</span>)).build();</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="24" /></div><div class="hljs-ln-code"><div class="hljs-ln-line">    }</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="25" /></div><div class="hljs-ln-code"><div class="hljs-ln-line">}</div></div></li></ol></code><div class="hljs-button signin" data-title="登录后复制" /></pre>

        <h3>&nbsp;</h3>

        <h3><a name="t4" />3、配置静态资源路径映射</h3>

        <pre
          class="has"
          name="code"
          onclick="hljs.signin(event)"
        ><code class="hljs java"><ol class="hljs-ln" style="width:1035px"><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="1" /></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-meta">@Configuration</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="2" /></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-meta">@EnableWebMvc</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="3" /></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-keyword">public</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">WebMvcConfig</span> <span class="hljs-keyword">implements</span> <span class="hljs-title">WebMvcConfigurer</span> </span>{</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="4" /></div><div class="hljs-ln-code"><div class="hljs-ln-line" /></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="5" /></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-meta">@Override</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="6" /></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-keyword">void</span> <span class="hljs-title">addResourceHandlers</span><span class="hljs-params">(ResourceHandlerRegistry registry)</span> </span>{</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="7" /></div><div class="hljs-ln-code"><div class="hljs-ln-line">        registry.addResourceHandler(<span class="hljs-string">"swagger-ui.html"</span>).addResourceLocations(<span class="hljs-string">"classpath:/META-INF/resources/"</span>);</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="8" /></div><div class="hljs-ln-code"><div class="hljs-ln-line">        registry.addResourceHandler(<span class="hljs-string">"/webjars/**"</span>).addResourceLocations(<span class="hljs-string">"classpath:/META-INF/resources/webjars/"</span>);</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="9" /></div><div class="hljs-ln-code"><div class="hljs-ln-line">    }</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="10" /></div><div class="hljs-ln-code"><div class="hljs-ln-line">}</div></div></li></ol></code><div class="hljs-button signin" data-title="登录后复制" /></pre>

        <h3>&nbsp;</h3>

        <h3><a name="t6" />4、管理RESTful接口</h3>

        <pre
          class="has"
          name="code"
          onclick="hljs.signin(event)"
        ><code class="hljs kotlin"><ol class="hljs-ln"><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="1" /></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-meta">@Api(tags = { <span class="hljs-meta-string">"测试接口"</span> })</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="2" /></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-meta">@RestController</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="3" /></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-keyword">public</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">TestController</span> </span>{</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="4" /></div><div class="hljs-ln-code"><div class="hljs-ln-line" /></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="5" /></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-meta">@ApiOperation(value = <span class="hljs-meta-string">"查询接口"</span>)</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="6" /></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-meta">@GetMapping(<span class="hljs-meta-string">"/test/{id}"</span>)</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="7" /></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-keyword">public</span> AjaxResult find(Integer id) {</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="8" /></div><div class="hljs-ln-code"><div class="hljs-ln-line">        <span class="hljs-comment">// <span class="hljs-doctag">TODO:</span>查询</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="9" /></div><div class="hljs-ln-code"><div class="hljs-ln-line">        <span class="hljs-keyword">return</span> AjaxResult.success(<span class="hljs-string">"查询结果"</span>);</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="10" /></div><div class="hljs-ln-code"><div class="hljs-ln-line">    }</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="11" /></div><div class="hljs-ln-code"><div class="hljs-ln-line" /></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="12" /></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-meta">@ApiOperation(value = <span class="hljs-meta-string">"增加接口"</span>)</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="13" /></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-meta">@PostMapping(<span class="hljs-meta-string">"/test"</span>)</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="14" /></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-keyword">public</span> AjaxResult add(Object test) {</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="15" /></div><div class="hljs-ln-code"><div class="hljs-ln-line">        <span class="hljs-comment">// <span class="hljs-doctag">TODO:</span>增加</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="16" /></div><div class="hljs-ln-code"><div class="hljs-ln-line">        <span class="hljs-keyword">return</span> AjaxResult.success(<span class="hljs-string">"添加成功"</span>);</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="17" /></div><div class="hljs-ln-code"><div class="hljs-ln-line">    }</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="18" /></div><div class="hljs-ln-code"><div class="hljs-ln-line" /></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="19" /></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-meta">@ApiOperation(value = <span class="hljs-meta-string">"删除接口"</span>)</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="20" /></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-meta">@DeleteMapping(<span class="hljs-meta-string">"/test/{id}"</span>)</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="21" /></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-keyword">public</span> AjaxResult delete(Integer id) {</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="22" /></div><div class="hljs-ln-code"><div class="hljs-ln-line">        <span class="hljs-comment">// <span class="hljs-doctag">TODO:</span>删除</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="23" /></div><div class="hljs-ln-code"><div class="hljs-ln-line">        <span class="hljs-keyword">return</span> AjaxResult.success(<span class="hljs-string">"删除成功"</span>);</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="24" /></div><div class="hljs-ln-code"><div class="hljs-ln-line">    }</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="25" /></div><div class="hljs-ln-code"><div class="hljs-ln-line" /></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="26" /></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-meta">@ApiOperation(value = <span class="hljs-meta-string">"修改接口"</span>)</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="27" /></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-meta">@PutMapping(<span class="hljs-meta-string">"/text"</span>)</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="28" /></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-keyword">public</span> AjaxResult update(Integer id) {</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="29" /></div><div class="hljs-ln-code"><div class="hljs-ln-line">        <span class="hljs-comment">// <span class="hljs-doctag">TODO:</span>修改</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="30" /></div><div class="hljs-ln-code"><div class="hljs-ln-line">        <span class="hljs-keyword">return</span> AjaxResult.success(<span class="hljs-string">"修改成功"</span>);</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="31" /></div><div class="hljs-ln-code"><div class="hljs-ln-line">    }</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="32" /></div><div class="hljs-ln-code"><div class="hljs-ln-line">}</div></div></li></ol></code><div class="hljs-button signin" data-title="登录后复制" /></pre>

        <h3>&nbsp;</h3>

        <h3><a name="t8" />5、查看生成的api文档</h3>

        <p>
          <img
            alt=""
            class="has"
            height="762"
            src="https://img-blog.csdnimg.cn/20190323004530401.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2ZlbmdfemlfeWU=,size_16,color_FFFFFF,t_70"
            width="1200"
          />
        </p>

        <p>&nbsp;</p>

        <h3><a name="t9" />&nbsp;6、调试接口</h3>

        <p>&nbsp;</p>

        <p>
          <img
            alt=""
            class="has"
            height="839"
            src="https://img-blog.csdnimg.cn/2019032300494193.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2ZlbmdfemlfeWU=,size_16,color_FFFFFF,t_70"
            width="1174"
          />
        </p>

        <p>&nbsp;</p>

        <p>
          总结：是不是很简单，这里只是简单的展示了方法，它还有更多的注解来描述接口、参数、返回值
          。需要学习更多的可以到官网阅读文档。
        </p>

        <p>希望对大家有所微薄的帮助。</p>

        <p>&nbsp;</p>

        <p>
          <span style="color: #3399ea"
            ><em
              >&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp;&nbsp;
              向上的路并不拥挤，到多数人选择了安逸！--it疯子也</em
            ></span
          >
        </p>
      </div> -->
      <div
        class="markdown-content"
        style="white-space: pre-wrap"
        v-html="markdownToHtml"
      ></div> </el-col
  ></el-row>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

import { useRoute } from "vue-router";

import { db } from "@/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

import { marked } from "@/utils/marked";

import { atob } from "@/utils/base64";

// article info
const db_post = ref({
  title: "",
  createAt: "",
  description: "",
  content: "",
});

// parse markdown
const markdownToHtml = computed(() => marked(db_post.value.content));

const route = useRoute();
onMounted(async () => {
  console.log("route.params.id", route.params.id);
  let id = route.params.id;

  // query to firebase
  const q = query(collection(db, "test"), where("id", "==", parseInt(id))); // 需要对应类型

  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    // console.log(doc.id, " => ", doc.data());

    let { title, createAt, description, content } = doc.data();
    db_post.value = {
      title,
      createAt,
      description,
      content: atob(content),
    };
  });
});
</script>
